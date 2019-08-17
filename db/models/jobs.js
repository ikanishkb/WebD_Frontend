const getDb = require("../utility/database").getDb;

class Jobs {
  constructor() {}
  save(data) {
    const db = getDb();
    return db
      .collection("jobs")
      .insertOne(data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchAll() {
    const db = getDb();
    return db
      .collection("jobs")
      .find()
      .toArray()
      .then(jobs => {
        console.log(jobs);
        return jobs;
      })
      .catch(err => {
        console.log(err);
      });
  }

  findById(jobId) {
    const db = getDb();
    return db
      .collection("jobs")
      .find({   id: jobId })
      .toArray()
      .then(job => {
        console.log(job);
        return job;
      })
      .catch(err=>{
          console.log(err);
      });
  }
}

module.exports = Jobs;