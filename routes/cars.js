var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET cars listing. */
router.get('/', function(req, res, next) {
    model.cars.findAll({})
    .then(cars => res.json({
        status: 200,
        data: cars
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
});
 
 
/* POST cars. */
router.post('/', function(req, res, next) {
    const {
        name,
        model_name,
        current_km
    } = req.body;
        model.cars.create({
            name: name,
            model_name: model_name,
            current_km: current_km
        })
        .then(car => res.status(201).json({
            status: 200,
            data: car,
            message: 'New car has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
 
/* update cars. */
router.put('/:id', function(req, res, next) {
    const car_id = req.params.id;
    const { name, model_name, current_km } = req.body;
    model.cars.update({
        name: name,
        model_name: model_name,
        current_km: current_km
        }, {
            where: {
                id: car_id
            }
        })
        .then(car => res.json({
            status: 200,
            data: car,
            message: 'car has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
 
/* GET cars listing. */
router.delete('/:id', function(req, res, next) {
   const car_id = req.params.id;
    const soft = false;
    model.cars.update({
        soft: soft
        }, {
            where: {
                id: car_id
            }
        })
        .then(car => res.json({
            status: 200,
            data: car,
            message: 'car has been deleted.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
module.exports = router;