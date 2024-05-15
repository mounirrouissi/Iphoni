import { ModelType } from "@/validators/option-validator";

export default async function handler(req: any, res: any) {
    console.log("Fetching Products...")
        let models = []
        try {
            const response = await fetch('https://api.printify.com/v1/shops/12791558/products.json', {
                headers: {
                    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImY0YmU2NGE1OWRmNzQzZmNlOWU4N2FkYzk3YTllMzU4NDVmODRhZGRiMWEzNjc5ZDIzNDdkZDkzZWI2MTYxZmM4NWZhNjY1NTI4OTU4Y2IxIiwiaWF0IjoxNzE1NzUyMjY2LjU2MzYwOCwibmJmIjoxNzE1NzUyMjY2LjU2MzYwOSwiZXhwIjoxNzQ3Mjg4MjY2LjU1NDEzNCwic3ViIjoiMTU5NjQ3NTMiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.ANTQ6UeODNR0oSnD_61v34eklv5PcP6aF1Gfyq2LJXBLdVY_xae8Qu2npHlm2ymTVIvuZWSLANOfzHE6b40`
                }
            });
            const { data } = await response.json();
            models = data.map((model: any): ModelType => ({
                label: model.title,
                value: model.title,
            }));
            console.log("models +" + models)
            return models;

        } catch (error) {
            console.error('Error fetching models:', error);
            return models;
        }
    };  