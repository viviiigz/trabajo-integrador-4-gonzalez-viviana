// tipos laterales
type OrderStatus = "pending" | "shipped" | "delivered";

let orderStatus: OrderStatus = "pending";
orderStatus = "shipped";

console.log(`Estado del pedido: ${orderStatus}`);

// enum
enum LogLevel {
    Info,    // 0
    Warning, // 1
    Error    // 2
}

function logMessage(level: LogLevel, message: string): void {
    // accedo al nombre del enum como indice
    console.log(`[${LogLevel[level]}]: ${message}`);
}

logMessage(LogLevel.Info, "Iniciando sistema del IPF...");
logMessage(LogLevel.Error, "Error de conexión.");