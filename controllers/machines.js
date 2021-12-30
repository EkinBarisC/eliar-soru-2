const Machine = require("../models/machine.js");

module.exports = {
  getMachines(req, res, next) {
    Machine.get()
      .then((data) => res.status(200).json({ success: true, data }))
      .catch((err) => res.status(400).json({ err }));
  },
  async updateMachines(req, res, next) {
    try {
      const machines = await Machine.get();
      machines.forEach((machine) => {
        //random booleans
        const plus_temp = Math.random() > 0.5;
        const plus_water = Math.random() > 0.5;
        const cap_bool = Math.random() > 0.5;
        //temperature
        if (plus_temp) {
          machine.temperature = machine.temperature + Math.random() * 10;
        } else {
          machine.temperature = machine.temperature - Math.random() * 10;
        }
        //water_level
        if (plus_water) {
          machine.water_level = machine.water_level + Math.random() * 10;
        } else {
          machine.water_level = machine.water_level - Math.random() * 10;
        }
        machine.water_level = parseFloat(machine.water_level.toFixed(2));
        machine.temperature = parseFloat(machine.temperature.toFixed(2));

        if (machine.temperature > 100) {
          machine.temperature = 100;
        } else if (machine.temperature < 30) {
          machine.temperature = 30;
        }
        if (machine.water_level < 0) {
          machine.water_level = 0;
        } else if (machine.water_level > 100) {
          machine.water_level = 100;
        }
        //cap_on
        if (cap_bool) {
          machine.cap_on = true;
        } else {
          machine.cap_on = false;
        }
      });
      //save to db
      await Machine.update(machines);
      res.status(200).json({ success: true, data: machines });
    } catch (err) {
      res.status(400).json({ success: false, err });
    }
  },
};
