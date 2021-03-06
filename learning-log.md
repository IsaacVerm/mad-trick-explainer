# learning-log

## 21-05-2020

Based on Angular [try](https://angular.io/start).

### Angular template syntax

- `*ngFor`
- `*ngIf`
- interpolation `{{ }}`
- property binding `[ ]`
- event binding `( )`

### Component definition

Components define areas of responsibility in the user interface.

### What does a component consist of?

- component class
- HTML template
- CSS

### Angular Router

The Angular Router displays components based on the browser's URL and your defined routes.

### Service

A service is an instance of a class that you can make available to any part of your application using Angular's dependency injection system.

Services are the place where you share data between parts of your application.

Multiple components can leverage the same service.

### Dependency injection

Dependencies are services or objects that a class needs to perform its function.

Dependency injection is a coding pattern in which a class asks for dependencies from external sources rather than creating them itself.

### Pipe

A way to write display-value transformations that you can declare in your HTML.

## 23-05-2020

### Dependency injection

Components consume services. 

An injector creates dependencies, and maintains a container of dependency instances that it reuses if possible.

A provider is an object that tells an injector how to obtain or create a dependency.

### Observables

The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of state changes.

Observables are declarative—that is, you define a function for publishing values, but it is not executed until a consumer subscribes to it. The subscribed consumer then receives notifications until the function completes, or until they unsubscribe.

The API for receiving values is the same whether the values are delivered synchronously or asynchronously.