const pool = require("../config/db");

const Machine = {};

Machine.create = async () => {
  return await pool.query(`INSERT into machine_info VALUES(1,30, 45, 'f')`);
};

Machine.get = async () => {
  const allRows = await pool.query("SELECT * FROM machine_info");
  return allRows.rows;
};

Machine.update = async (machines) => {
  machines.forEach(async (machine) => {
    await pool.query(
      `UPDATE machine_info SET temperature = $1, water_level = $2, cap_on = $3 where id = $4`,
      [machine.temperature, machine.water_level, machine.cap_on, machine.id]
    );
  });
};

module.exports = Machine;
