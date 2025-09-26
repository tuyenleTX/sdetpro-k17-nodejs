# Inheritance
Inheritance is one of the core principles of Object-Oriented Programming (OOP). It allows a new class (called the child or subclass) to derive/extend from an existing class (called the parent or superclass), reusing its properties and behaviours while adding or overriding features.

Design Contept (IS-A relationship), Reuse Concept 

# Rules
Constructors
. If the parent class has a constructor, the child class must call super(...) before using this.
. super(...) must be the first statement in child's constructor. 

Access Modifiers (private, protected, public)
. private -> accessible only in the decclaring class (not even in child).
. protected -> accessible in the class + subclasses. 
    -> For IS-A relationship, this should be a MUST

Overriding
. A child class can replace (override) a parent method.
. The method signature must be compatible.
. You can call parent's version with super.method().
. Use override keyword in TypeScript to make it explicit.