
// Section 1: Type Annotations & Functions
// Task 1: Capitalize Words Function
function capitalizeWords(text: string): string {
    return text ? text.replace(/\b\w/g, (char) => char.toUpperCase()) : "";
}

// Task 2: Number Validator Function
function isValidNumber(value: unknown): boolean {
    return typeof value === "number" && !isNaN(value);
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"
console.log(isValidNumber(50)); // Output: true
console.log(isValidNumber("40")); // Output: false
console.log(isValidNumber(NaN)); // Output: false

//Section 2: Interfaces & Object Types
// Task 3: Define the User Interface
interface User {
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean; // Optional property
}

// Function to create a user
function createUser(user: User): string {
    return `User ${user.name} created successfully`;
}


const newUser: User = { id: 1, name: "Shadia", email: "shadia@example.com" };
console.log(createUser(newUser)); // Output: "User Shadia created successfully"

//Section 3: Classes & OOP

// Task 4: Implement a Product Class
class Product {
    // Properties with access modifiers
    public name: string;
    public category: string;
    private price: number; // Private, so it cannot be accessed outside the class

    // Constructor to initialize the properties
    constructor(name: string, price: number, category: string) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Method to calculate discounted price
    public getDiscounted(discount: number): number {
        return this.price - (this.price * discount) / 100;
    }
}

const product = new Product("SmartPhone", 2000, "Electronics");
console.log(`Discounted Price: $${product.getDiscounted(10)}`); 



//Section 4: Generics & Utility Types
// Define the function using Generics
function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
    let result: T[] = [];
    for (let item of arr) {
        if (predicate(item)) {
            result.push(item); 
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6];

// Condition: Keep only even numbers
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]


//Section 5: TypeScript with Async/Await
// Fetch user data
async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Something went wrong while fetching data");
        }
        const users = await response.json();
        users.forEach((user: any) => {
            console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
        });

    } catch (error) {
        console.log(error);
    }
}
fetchUsers();


//Bonus Challenge
// Validate password
function validatePassword(password: string): string {
    // Common weak passwords
    const weakPasswords = ["password", "123456", "qwerty"];

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
