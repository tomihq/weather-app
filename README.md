# Zustand
## Why Zustand?
Using useState in small apps is fine, but as your app grows, this approach becomes problematic since you'll need to pass data through props across many components.
This issue can be addressed with React Context. However, the downside of using Context is that you have to wrap your entire application (or a subset of it) in a provider, and any updates to the context can trigger unnecessary re-renders throughout the app and it's not efficient at all. 

Zustand allows you to manage state across your entire application more effectively. Specifically, it lets you create global state that doesn't need to be defined within a component