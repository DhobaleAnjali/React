/**
 * 
 * <div class="parent">
 *      <div class="child">
 *          <h1></h1>
 *      </div>
 *      <div class="child2">
 *          <h1></h1>
 *      </div>
 * </div>
 */        
        
        const parent = React.createElement('div', {
            id:'parent'
        }, [React.createElement('div', {
            id:'child'
        },React.createElement('h1', {
   
        }, "I am in h1") ), React.createElement('div', {
            id:'child2'
        },React.createElement('h1', {
   
        }, "I am in h1") )]);
        
        
        // this empty object is a place where u can give attributes to your tags
        // const heading = React.createElement('h1', {
        //     id:'heading',
        //     xyz:'xyz'
        // }, "Hello world from React");
        // console.log(heading)
        //if u console this it will not show any h1 tag it gives an object element because it is react object
        // 2 and 3 part is props (2-attribute 3 children which will go inside the h1 tag)
        //the render method actually convert react object into h1 tag
        //third argument is the children/content that u pass in, and it is an array so use it for siblings
        const root = ReactDOM.createRoot(document.getElementById('root'));

        root.render(parent);