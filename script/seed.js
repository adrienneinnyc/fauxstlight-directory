const { db, Employee } = require("../server");

const {
  randomEmployees,
  jobTitles,
  interests,
  departments,
} = require("./seedData.js");

const seed = async () => {
  await db.sync({ force: true });

  const employees = await Promise.all(
    randomEmployees.map((employee, index) =>
      Employee.create({
        email: employee.email,
        firstName: employee.name.first,
        lastName: employee.name.last,
        location: employee.location.city,
        phoneNumber: employee.phone,
        picture: employee.picture.large,
        interests: interests[index % interests.length],
        jobTitle: jobTitles[index % jobTitles.length],
        department: departments[index % departments.length],
      })
    )
  );

  console.log(`seeded ${employees.length} employees`);
  console.log(`seeded successfully`);
};

const runSeed = async () => {
  console.log("seeding...");

  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
};

runSeed();
