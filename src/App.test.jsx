 import {describe, test,expect } from 'vitest'
import { render,screen  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App'

describe("first suite",()=>{

    test("first test", ()=>{
        render(<App></App>);

        const rsElem = screen.getAllByText("Project Redshirt",{ strict:false})

        expect(rsElem);

    })

    test("test unauthorized without login", ()=>{
        render(<App></App>);

        const unlisted = screen.getByText("Unlisted");

        userEvent.click(unlisted);

        
        const unauthorized = screen.getAllByText("Unauthorized",{ strict:false})

    
    })
})