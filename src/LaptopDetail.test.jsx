import {describe, test , expect} from 'vitest'
import { render, screen, fireEvent, getByLabelText } from '@testing-library/react';
import LaptopDetails from './pages/LaptopDetails'
import Detail from './pages/UploadComponents/detail';
import Color from './pages/UploadComponents/color';
import Price from './pages/UploadComponents/Price';
import Connect from './pages/UploadComponents/connectivity';
import Features from './pages/UploadComponents/features';
import Type from './pages/UploadComponents/type';
import PictureComponent from './pages/UploadComponents/PictureComponent';

describe("render Laptop details componets to the user", () => {
//  Just a test for running the title
    test("render the title page", async () => {
        render(<LaptopDetails />);
        const headingElement = screen.getByText("Provide laptop details below:");
        expect(headingElement).toBeVisible();
    });
//  tests for the following inputs of a laptop

    describe("SKU input", () => {
        // Test for the render input
        test("render sku input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const skuInput = screen.getByPlaceholderText(/SKU/i);
            expect(skuInput).toBeVisible();
        })
        // Test for the render Change input
        test("shoud be able to type in the SKU input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const skuInput = screen.getByPlaceholderText(/SKU/i);
            fireEvent.change(skuInput, {target: {value: / SKU Number/i}})
            expect(skuInput.value).toBe(/SKU Number/i);
        })
    })

    describe("Make input", () => {
        // Test for the render input
        test("render Make input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const makeInput = screen.getByPlaceholderText(/Make/i);
            expect(makeInput).toBeVisible();
        })
        // Test for the render Change input
        test("shoud be able to type in the Make input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const makeInput = screen.getByPlaceholderText(/Make/i);
            fireEvent.change(makeInput, {target: {value: / Make Number/i}})
            expect(makeInput.value).toBe(/Make Number/i);
        })
    })

    describe("Model input", () => {
        // Test for the render input
        test("render Model input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const makeInput = screen.getByPlaceholderText(/Model/i);
            expect(makeInput).toBeVisible();
        })
        // Test for the render Change input
        test("shoud be able to type in the Model input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const makeInput = screen.getByPlaceholderText(/Model/i);
            fireEvent.change(makeInput, {target: {value: / Model Number/i}})
            expect(makeInput.value).toBe(/Model Number/i);
        })
    })

    describe("Resolusion input", () => {
        // Test for the render input
        test("render Resolusion input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const resolusionInput = screen.getByPlaceholderText(/Resolusion/i);
            expect(resolusionInput).toBeVisible();
        })
        // Test for the render Change input
        test("shoud be able to type in the Resolusion input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const resolusionInput = screen.getByPlaceholderText(/Resolusion/i);
            fireEvent.change(resolusionInput, {target: {value: / Resolusion Number/i}})
            expect(resolusionInput.value).toBe(/Resolusion Number/i);
        })
    })

    describe("CPU input", () => {
        // Test for the render input
        test("render CPU input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const cpuInput = screen.getByPlaceholderText(/CPU/i);
            expect(cpuInput).toBeVisible();
        })
        // Test for the render Change input
        test("shoud be able to type in the CPU input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const cpuInput = screen.getByPlaceholderText(/CPU/i);
            fireEvent.change(cpuInput, {target: {value: / CPU Number/i}})
            expect(cpuInput.value).toBe(/CPU Number/i);
        })
    })

    describe("Ram input", () => {
        // Test for the render input
        test("render Ram input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const ramInput = screen.getByPlaceholderText(/Ram/i);
            expect(ramInput).toBeVisible();
        })
        // Test for the render Change input
        test("shoud be able to type in the Ram input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const ramInput = screen.getByPlaceholderText(/Ram/i);
            fireEvent.change(ramInput, {target: {value: / Ram Number/i}})
            expect(ramInput.value).toBe(/Ram Number/i);
        })
    })

    describe("Storage input", () => {
        // Test for the render input
        test("render Storage input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const storageInput = screen.getByPlaceholderText(/Storage/i);
            expect(storageInput).toBeVisible();
        })
        // Test for the render Change input
        test("shoud be able to type in the Storage input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const storageInput = screen.getByPlaceholderText(/Storage/i);
            fireEvent.change(storageInput, {target: {value: / Storage Number/i}})
            expect(storageInput.value).toBe(/Storage Number/i);
        })
    })

    describe("GPU input", () => {
        // Test for the render input
        test("render GPU input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const gpuInput = screen.getByPlaceholderText(/GPU/i);
            expect(gpuInput).toBeVisible();
        })
        // Test for the render Change input
        test("shoud be able to type in the GPU input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const gpuInput = screen.getByPlaceholderText(/GPU/i);
            fireEvent.change(gpuInput, {target: {value: / GPU Number/i}})
            expect(gpuInput.value).toBe(/GPU Number/i);
        })
    })

    describe("OS input", () => {
        // Test for the render input
        test("render OS input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const osInput = screen.getByPlaceholderText(/OS/i);
            expect(osInput).toBeVisible();
        })
        // Test for the render Change input
        test("shoud be able to type in the OS input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const osInput = screen.getByPlaceholderText(/OS/i);
            fireEvent.change(osInput, {target: {value: / OS Number/i}})
            expect(osInput.value).toBe(/OS Number/i);
        })
    })

    describe("Notes input", () => {
        // Test for the render input
        test("render Notes input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const notesInput = screen.getByPlaceholderText(/Notes/i);
            expect(notesInput).toBeVisible();
        })
        // Test for the render Change input
        test("shoud be able to type in the Notes input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const notesInput = screen.getByPlaceholderText(/Notes/i);
            fireEvent.change(notesInput, {target: {value: / Notes Number/i}})
            expect(notesInput.value).toBe(/Notes Number/i);
        })
    })

    describe("Screensize input", () => {
        // Test for the render input
        test("render Screensize input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const screensizeInput = screen.getByPlaceholderText(/Screensize/i);
            expect(screensizeInput).toBeVisible();
        })
        // Test for the render Change input
        test("shoud be able to type in the Screensize input", async () => {
            render(<Detail handleChange={ () => {} } />);
            const screensizeInput = screen.getByPlaceholderText(/Screensize/i);
            fireEvent.change(screensizeInput, {target: {value: / Screensize Number/i}})
            expect(screensizeInput.value).toBe(/Screensize Number/i);
        })
    })

    describe("Custom input", () => {
        // Test for the render input
        test("render Custom input", async () => {
            render(<Detail handleCustomChange={ () => {} } />);
            const customInput = screen.getByPlaceholderText(/Custom/i);
            expect(customInput).toBeVisible();
        })
        // Test for the render Change input
        test("shoud be able to type in the Custom input", async () => {
            render(<Detail handleCustomChange={ () => {} } />);
            const customInput = screen.getByPlaceholderText(/Custom/i);
            fireEvent.change(customInput, {target: {value: / Custom Number/i}})
            expect(customInput.value).toBe(/Custom Number/i);
        })
    })

    describe("Color input", () => {
        // Test for the render input
        test("render Color input", async () => {
            render(<Color handleColorChange={ () => {} } />);
            const colorInput = screen.getByPlaceholderText(/Color/i);
            expect(colorInput).toBeVisible();
        })
        // Test for the render Change input
        test("shoud be able to type in the Color input", async () => {
            render(<Color handleColorChange={ () => {} } />);
            const colorInput = screen.getByPlaceholderText(/Color/i);
            fireEvent.change(colorInput, {target: {value: / Color /i}})
            expect(colorInput.value).toBe(/Color/i);
        })
    })

    describe("Color input", () => {
        // Test for the render input
        test("render Color input", async () => {
            render(<Color handleColorChange={ () => {} } />);
            const colorInput = screen.getByTestId("color");
            expect(colorInput).toBeVisible();
        })
        // Test for the render Change input
        test("shoud be able to type in the Color input", async () => {
            render(<Color handleColorChange={ () => {} } />);
            const colorInput = screen.getByTestId("color");
            fireEvent.change(colorInput, {target: {value: / Color /i}})
            expect(colorInput.value).toBe(/Color/i);
        })
    })

    describe("Price input", () => {
        // Test for the render input
        test("render Price input", async () => {
            render(<Price handlePriceChange={ () => {} } />);
            const priceInput = screen.getByTestId("Price");
            expect(priceInput).toBeVisible();
        })
        // Test for the render Change input
        test("shoud be able to type in the Price input", async () => {
            render(<Price handlePriceChange={ () => {} } />);
            const priceInput = screen.getByTestId("Price");
            fireEvent.change(priceInput, {target: {value: / Price /i}})
            expect(priceInput.value).toBe(/Price/i);
        })
    })

    describe("Connectivity input", () => {
        // Test for the render DisplayPort checkbox input
        test("render Connectivity input", async () => {
            render(<Connect handleConnectChange={ () => {} } />);
            const connectInput = screen.getByLabelText("DisplayPort");
            expect(connectInput).toBeVisible();
        })
        // Test for render displayport Change checkbox input
        test("shoud be able to check a Connectivity input", async () => {
            render(<Connect handleConnectChange={ () => {} } />);
            //const connectInput = screen.getByLabelText("DisplayPort");
            fireEvent.click(getByLabelText('DisplayPort'));
            expect(handleConnectChange).toHaveBeenCalledTimes(1);
        })
    })
    
    describe("Feature input", () => {
        // Test for the render 10/100 Lan card checkbox input
        test("render Feature input", async () => {
            render(<Features handleFeatureChange={ () => {} } />);
            const featureInput = screen.getByLabelText("10/100 Lan card");
            expect(featureInput).toBeVisible();
        })
        // Test for render 10/100 Lan card Change checkbox input
        test("shoud be able to check a Feature input", async () => {
            render(<Features handleFeatureChange={ () => {} } />);
            //const featureInput = screen.getByLabelText("10/100 Lan card");
            fireEvent.click(getByLabelText('10/100 Lan card'));
            expect(handleFeatureChange).toHaveBeenCalledTimes(1);
        })
    })
    
    describe("Type input", () => {
        // Test for the render Casual computing checkbox input
        test("render Type input", async () => {
            render(<Type handleTypeChange={ () => {} } />);
            const typeInput = screen.getByLabelText("Casual computing");
            expect(typeInput).toBeVisible();
        })
        // Test for render Casual computing Change checkbox input
        test("shoud be able to check a Type input", async () => {
            render(<Type handleTypeChange={ () => {} } />);
            //const typeInput = screen.getByLabelText("Casual computing");
            fireEvent.click(getByLabelText('Casual computing'));
            expect(handleTypeChange).toHaveBeenCalledTimes(1);
        })
    })

    describe("Picture Upload input", () => {
        // Test for the render Picture Upload input
        test("render Picture Upload input", async () => {
            render(<PictureComponent changeHandler={ () => {}} />);
            const uploadPicInput = screen.getByDisplayValue("Add pic");
            expect(uploadPicInput).toBeVisible();
        })
        // Test for render Picture Upload Change input
        test("shoud be able to Upload a Picture file input", async () => {
            render(<PictureComponent changeHandler={ () => {}} />);
            //const uploadPicInput = screen.getByLabelText("Add pic");
            fireEvent.click(getByDisplayValue('Add pic'));
            expect(changeHandler).toHaveBeenCalledTimes(1);
        })
    })
    
});
/*
notes:
sku: "",
make: "",
model: "",
resolution: "",
cpu: "",
ram: "",
storage: "",
gpu: "",
os: "",
notes: "",
screensize: "",
custom: ""
props:onHandle={handleChange} laptop={curr_laptop} customChanged={handleCustomChange} isCustom={custom}
https://polvara.me/posts/testing-a-custom-select-with-react-testing-library
for connect test { https://pretty-checkbox-react.netlify.app/docs/main-concepts/testing/ }

*/