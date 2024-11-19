import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("Contact Us page Test cases", ()=> {

    beforeAll(()=> {
        console.log("BeforeAll");
    })

    beforeEach(()=> {
        console.log("Before Each");
    })


    test("This should show us the contact us page component", ()=> {
        render(<Contact/>)
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument();
 })
 
 test("This should show us the Button  component", ()=> {
     render(<Contact/>)
     const button = screen.getByText("Submit")
     expect(button).toBeInTheDocument();
 })
 
 test("This should show us the name inside  component", ()=> {
     render(<Contact/>)
     const inputeName = screen.getByPlaceholderText("Name")
     expect(inputeName).toBeInTheDocument();
 })
 
 test("should show 2  inputs in the contact page ", ()=> {
        render(<Contact/>)
        const inputBoxes = screen.getAllByRole("textbox")
        expect(inputBoxes.length).toBe(2)
 })
})

