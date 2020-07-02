const router = require("express").Router();
const { Employee } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const employees = await Employee.findAll({ order: [["lastName", "ASC"]] });
    res.send(employees);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const employee = await Employee.findByPk(req.params.id);

    if (employee) {
      res.send(employee);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const employee = await Employee.create({ ...req.body });
    res.status(201).send(employee);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const employeeId = +req.params.id;
    const [updated] = await Employee.update(req.body, {
      where: { id: employeeId },
    });

    if (updated) {
      const updatedEmployee = await Employee.findOne({
        where: { id: employeeId },
      });

      return res.status(200).send({ employee: updatedEmployee });
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const employeeId = req.params.id;
    const deletedEmployee = await Employee.destroy({
      where: { id: employeeId },
    });

    if (deletedEmployee) {
      return res.status(204).send("Post deleted");
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
