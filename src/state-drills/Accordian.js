import React from 'react';


export default class Accordian extends React.Component {
    static defaultProps = {
        sections: []
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
                    <button 
                    type="button" 
                    onClick={() => this.handleClick(idx)}
                    >
                        {section.title}
                    </button>
                    {(sectionIndex === idx) && <p>{section.content}</p>}
                </li>
            )
      }
    

      render() {
          const { sectionIndex } = this.state
          const { sections } = this.props
          return (
              <ul className="Accordian">
                  {sections.map((section, idx) => 
                     this.displayResults(section, idx, sectionIndex)
                    )
                }
              </ul>
          )
        }
}