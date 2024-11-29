export type Task = {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
}

class TaskCreator {
    static createTask(id: number, title: string, description: string): Task {
        return {
            id,
            title,
            description,
            isCompleted: false
        };
    }
}

const newTask = TaskCreator.createTask(1, "Faire les courses", "Acheter des fruits et légumes");
console.log(newTask); 

interface Product {
    operation(): string;
}

abstract class Creator {
    abstract factoryMethod(): Product;

    someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: Working with ${product.operation()}`;
    }
}

class ConcreteProductA implements Product {
    operation(): string {
        return "ConcreteProductA";
    }
}

class ConcreteProductB implements Product {
    operation(): string {
        return "ConcreteProductB";
    }
}

class ConcreteCreatorA extends Creator {
    factoryMethod(): Product {
        return new ConcreteProductA();
    }
}

class ConcreteCreatorB extends Creator {
    factoryMethod(): Product {
        return new ConcreteProductB();
    }
}

export { TaskCreator, ConcreteCreatorA, ConcreteCreatorB };
