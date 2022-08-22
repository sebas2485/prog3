/**dto */
const productDto = require('../../model/dto/product.dto');
const config = require('config');
 
/**helper */

const notHelper = require("../helpers/notifications.helpers")

exports.createProduct = (req, res, next) => {
    let std = {
        nombreProducto: req.body.nombreProducto,
        precio: req.body.precio,
        categoria: req.body.categoria,
        marca: req.body.marca,
        color: req.body.color,
        modelo: req.body.modelo,
        tamaño: req.body.tamaño,
        descripcion: req.body.descripcion,
        duracionGarantia: req.body.duracionGarantia,
        tiempoEnvio: req.body.tiempoEnvio,
        costoEnvio: req.body.costoEnvio,
        
    }
    productDto.create(std, (err,data) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        notHelper.sendSMS(std.nombreProducto);
    } )
}

exports.updateProduct = (req, res, next) => {
    let std = {
        nombreProducto: req.body.nombreProducto,
        precio: req.body.precio,
        categoria: req.body.categoria,
        marca: req.body.marca,
        color: req.body.color,
        modelo: req.body.modelo,
        tamaño: req.body.tamaño,
        descripcion: req.body.descripcion,
        duracionGarantia: req.body.duracionGarantia,
        tiempoEnvio: req.body.tiempoEnvio,
        costoEnvio: req.body.costoEnvio,
        
    }
    productDto.update({_id: req.body.id}, std, (err,data) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        res.status(201).json(
            {
                info: data
            }
        )
    } )
}

exports.getAll = (req, res, next) => {
    
    productDto.getAll({}, (err,data) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        res.status(200).json(
            {
                info: data
            }
        )
    } )
}

exports.getByCode = (req, res, next) => {
    
    productDto.getByCode({code: req.params.code}, (err,data) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        res.status(200).json(
            {
                info: data
            }
        )
    } )
}

exports.deleteProduct = (req, res, next) => {
    
    productDto.deleteProduct({_id: req.body.id}, (err,data) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        res.status(204).json()
    } )
}