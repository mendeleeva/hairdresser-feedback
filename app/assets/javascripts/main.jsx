class Main extends React.Component {
    render() {
        return (
        <h1>Hello from the component</h1>
        );

    }
    
}



let documentReady = () => {
     React.render(
      <h1>HoHoHo</h1>,
      document.getElementById("react")
     );
};

$(documentReady);