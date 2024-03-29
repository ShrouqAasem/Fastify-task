"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductHandler = exports.getProductsHandler = exports.createProductHandler = void 0;
const product_service_1 = require("./product.service");
function createProductHandler(request
// <{
//   Body: CreateProductInput;
// }>
// request: FastifyRequest
, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield (0, product_service_1.createProduct)(Object.assign(Object.assign({}, request.body), { picture: request.file.filename, categoryId: parseInt(request.body.categoryId) }));
        reply.code(200).send({ product, message: 'Product created successfully' });
    });
}
exports.createProductHandler = createProductHandler;
function getProductsHandler() {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield (0, product_service_1.getProducts)();
        return products;
    });
}
exports.getProductsHandler = getProductsHandler;
function getProductHandler(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = request.params;
        const product = yield (0, product_service_1.getProduct)(id);
        return product;
    });
}
exports.getProductHandler = getProductHandler;
