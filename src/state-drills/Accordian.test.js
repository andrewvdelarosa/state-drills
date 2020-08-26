import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Enzyme from "enzyme";
import Accordian from './Accordian'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() });


const sections = [{
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


describe(`accordian component`, () => {

  it("Accordian renders", () => {
    const wrapper = shallow(<Accordian />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
  it("Renders the section by default", () => {
    const wrapper = shallow(<Accordian sections={sections} />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it("Opens a click section", () => {
    const wrapper = shallow(<Accordian sections={sections} />)
    wrapper.find("button").at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it("Opens a section at a time", () => {
    const wrapper = shallow(<Accordian sections={sections} />)
    wrapper.find("button").at(1).simulate('click')
    wrapper.find("button").at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot();
  })

})

