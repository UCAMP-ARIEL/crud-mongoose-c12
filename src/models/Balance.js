// 1. IMPORTACIONES
const mongoose = require('mongoose')

// 2. SCHEMA
const BalanceSchema = mongoose.Schema(
	{
		descripcion: {
			type: String,
			required: true,
		},
		tipo: {
			type: String,
			required: true,
		},
		monto: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true, // Permite agregar la fecha en el que fue generado el documento.
	}
)

// 3. MODELO
const Balance = mongoose.model('Balance', BalanceSchema)

// 4. EXPORTACIÓN
module.exports = Balance
