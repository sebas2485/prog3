
exports.sendSMS = async(nombreProducto) => {
    let code = Math.random(10);
    console.log(`sendSMS ${code} about ${nombreProducto}`)
}