import React from 'react';


export default class Accordian extends React.Component {
    static defaultProps = {
        sections: [{
            title: "Section 1",
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
          {
            title: "Section 2",
            content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
          },
          {
            title: "Section 3",
            content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
          },]
    };
        
    state = {
        sectionIndex: null,
    }

     handleClick = (sectionIdx) => {
            this.setState({ sectionIndex: sectionIdx })
      }

      displayResults(section, idx, sectionIndex) {
         return (
                <li key={idx} className="item">
                    <button type="button" onClick={this.handleClick(idx)}>{section.title}</button>
                    {(sectionIndex === idx) && <p>{section.content}</p>}
                </li>
            )
      }
    

      render() {
          const {sectionIndex} = this.state;
          const {sections} = this.props;
          return (
          <div className="Results">
              <ul className="Accordian">
                  {sections.map((section, idx) => {
                     this.displayResults(section, idx, sectionIndex)
                    })
                }
              </ul>
          </div>
          )}


}