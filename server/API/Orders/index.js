// Libraries
import express from 'express';


//Database Model
import { OrderModel } from "../../database/allModels";

const Router = express.Router();

/**
 * Route       /
 * Des         GET all order based on id
 * Params      _id
 * Access      Public
 * Method      GET
 */

Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params,

        const getOrders = await OrderModel.findOne({ user: _id });
        if (!getOrders) {
            return res.status(400).json({ error: 'NO ORDER' })
        }

        return res.status(200).json({ orders: getOrders })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})
/**
 * Route       /new
 * Des         Add new order
 * Params      _id
 * Access      Public
 * Method      POSt
 */

Router.post("/new/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const { orderDetails } = req.body;

        const addNewOrder = await OrderModel.findOneAndUpdate({
            user: _id
        }, {
            $push: { orderDetails },
        },
            { new: true }
        )

        return res.json({order: addNewOrder});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})
export default Router;