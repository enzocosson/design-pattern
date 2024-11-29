export interface Observer {
    update(message: string): void;
}

export class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(message: string): void {
        this.observers.forEach(observer => observer.update(message));
    }
}

export class AlertNotifier implements Observer {
    update(message: string): void {
        alert(message);  
    }
}
