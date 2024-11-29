export class AddStrategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}

export class MultiplyStrategy {
    execute(a: number, b: number): number {
        return a * b;
    }
}

export class Context {
    private strategy: AddStrategy | MultiplyStrategy;

    constructor() {
        this.strategy = new AddStrategy();
    }

    setStrategy(strategy: AddStrategy | MultiplyStrategy): void {
        this.strategy = strategy;
    }

    executeStrategy(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}
