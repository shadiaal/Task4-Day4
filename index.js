var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Section 1: Type Annotations & Functions
// Task 1: Capitalize Words Function
function capitalizeWords(text) {
    return text ? text.replace(/\b\w/g, function (char) { return char.toUpperCase(); }) : "";
}
// Task 2: Number Validator Function
function isValidNumber(value) {
    return typeof value === "number" && !isNaN(value);
}
console.log(capitalizeWords("hello world")); // Output: "Hello World"
console.log(isValidNumber(50)); // Output: true
console.log(isValidNumber("40")); // Output: false
console.log(isValidNumber(NaN)); // Output: false
// Function to create a user
function createUser(user) {
    return "User ".concat(user.name, " created successfully");
}
var newUser = { id: 1, name: "Shadia", email: "shadia@example.com" };
console.log(createUser(newUser)); // Output: "User Shadia created successfully"
//Section 3: Classes & OOP
// Task 4: Implement a Product Class
var Product = /** @class */ (function () {
    // Constructor to initialize the properties
    function Product(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    // Method to calculate discounted price
    Product.prototype.getDiscounted = function (discount) {
        return this.price - (this.price * discount) / 100;
    };
    return Product;
}());
var product = new Product("SmartPhone", 2000, "Electronics");
console.log("Discounted Price: $".concat(product.getDiscounted(10)));
//Section 4: Generics & Utility Types
// Define the function using Generics
function filterArray(arr, predicate) {
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}
var numbers = [1, 2, 3, 4, 5, 6];
// Condition: Keep only even numbers
var evenNumbers = filterArray(numbers, function (num) { return num % 2 === 0; });
console.log(evenNumbers); // Output: [2, 4, 6]
//Section 5: TypeScript with Async/Await
// Fetch user data
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var response, users, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/users")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Something went wrong while fetching data");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    users = _a.sent();
                    users.forEach(function (user) {
                        console.log("ID: ".concat(user.id, ", Name: ").concat(user.name, ", Email: ").concat(user.email));
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
fetchUsers();
//Bonus Challenge
// Validate password
function validatePassword(password) {
    // Common weak passwords
    var weakPasswords = ["password", "123456", "qwerty"];
    if (weakPasswords.includes(password)) {
        return "Password is too weak.";
    }
    if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!/\d/.test(password)) {
        return "Password must contain at least one number.";
    }
    if (!/[!@#$%^&*]/.test(password)) {
        return "Password must contain at least one special character.";
    }
    return "Password is valid!";
}
console.log(validatePassword("Password123!"));
console.log(validatePassword("12345678"));
console.log(validatePassword("password"));
