const request = require("supertest");
const { expect } = require("chai");
const app = require("../..");
const { Employee } = require("../../db");

describe("employee endpoints", () => {
  const janeInfo = {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@fl.com",
    jobTitle: "Manager",
    department: "Engineering",
  };

  const johnInfo = {
    firstName: "John",
    lastName: "Doe",
    email: "john@fl.com",
    jobTitle: "Engineer",
    department: "Engineering",
  };

  before("Synchronize the model", () => Employee.sync({ force: true }));
  beforeEach("Truncate data", () => Employee.truncate());

  describe("GET /api/employees", () => {
    it("fetches all employees", async () => {
      const newEmployees = [
        Employee.create({
          ...janeInfo,
        }),
        Employee.create({ ...johnInfo }),
      ];

      await Promise.all(newEmployees);

      await request(app)
        .get("/api/employees")
        .expect(200)
        .then((response) => {
          expect(response.body).to.have.lengthOf(newEmployees.length);
        });
    });
  });

  describe("GET /api/employees/:id", () => {
    it("fetches the correct employee", async () => {
      const newEmployee = await Employee.create({
        id: 1,
        ...janeInfo,
      });

      await request(app)
        .get("/api/employees/1")
        .expect(200)
        .then((response) => {
          expect(response.body.firstName).to.equal(newEmployee.firstName);
        });
    });
  });

  describe("POST /api/employees", () => {
    it("creates a new employee", async () => {
      await request(app)
        .post("/api/employees")
        .send({ ...johnInfo })
        .expect(201);
      const john = await Employee.findOne({
        where: { email: johnInfo.email },
      });
      expect(john).to.exist;
    });
  });

  describe("PUT /api/employees/:id", () => {
    it("updates an employee", async () => {
      await Employee.create({
        id: 1,
        ...janeInfo,
      });

      await request(app)
        .put("/api/employees/1")
        .send({ interests: "hiking" })
        .expect(200)
        .then((response) => {
          expect(response.body.employee).to.have.property(
            "interests",
            "hiking"
          );
        });
    });
  });

  describe("DELETE /api/employees/:id", () => {
    it("deletes the correct employee", async () => {
      const newEmployee = await Employee.create({
        id: 1,
        ...janeInfo,
      });

      await request(app).delete("/api/employees/1").expect(204);

      const jane = await Employee.findOne({
        where: { email: newEmployee.email },
      });
      expect(jane).not.to.exist;
    });
  });
});
