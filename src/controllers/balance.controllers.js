const Balance = require('../models/Balance')

const getBalance = async (req, res) => {
	try {
		const balance = await Balance.find({})
		res.json({ balance })
	} catch (error) {
		res.status(500).json({
			msg: 'Hubo un error obteniendo los datos',
		})
	}
}

const createBalance = async (req, res) => {
	const { descripcion, tipo, monto } = req.body

	try {
		const nuevoBalance = await Balance.create({ descripcion, tipo, monto })
		res.json(nuevoBalance)
	} catch (error) {
		res.status(500).json({
			msg: 'Hubo un error guardando los datos',
		})
	}
}

const updateBalance = async (req, res) => {
	const { id, descripcion, tipo, monto } = req.body

	try {
		const actualizacionBalance = await Balance.findByIdAndUpdate(id, { descripcion, tipo, monto }, { new: true })
		res.json(actualizacionBalance)
	} catch (error) {
		res.status(500).json({
			msg: 'Hubo un error actualizando el Balance',
		})
	}
}

const deleteBalance = async (req, res) => {
	const { id } = req.body

	try {
		const BalanceBorrado = await Balance.findByIdAndRemove({ _id: id })

		res.json(BalanceBorrado)
	} catch (error) {
		res.status(500).json({
			msg: 'Hubo un error borrando el dato especificado',
		})
	}
}

module.exports = { getBalance, createBalance, updateBalance, deleteBalance }
