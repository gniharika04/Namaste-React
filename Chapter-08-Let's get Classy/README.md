## Chapter-08-Let's get Classy

This class was all about understanding the creating class-based component, Why functional components are far better than Class based components, use of "this" keyword, how to create state and props in class based components. Most important concept it's different lifecycle methods, whats happening under the hood was clearly explained. He also explained why unmounting a component is always important, also how unmounting can be done in functional component. We even discussed about various possible interview questions like how many phases are there when react is rendering things? Try to find out the answer. If you aren't then you can refer theory and code for better understanding.

Perk: There are 2 types of data in a component, one is coming from parent through props and accessed using 'this.props' and another is local state within the component that is created in constructor() and accessed using 'this.state' and modified using this.setState()

NOTE: Whenever a component is called, first constructor() is called, followed by render(), if any children are present in render(), then those children's constructor & render() method is called, after which componentDidMount() of children (in order) is called before parent's componentDidMount, followed by componentDidUpdate() and componentWillUnmount of children followed by parent.

Keep Reacting & Keep Coding!!