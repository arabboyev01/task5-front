export class DataGenerator {
    baseUrl: string

    constructor(baseUrl: string){
        this.baseUrl = baseUrl
    }

    async getGeneratedData(endpoint: string, payload: object): Promise<any> {

        const response = await fetch(`${this.baseUrl}/${endpoint}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload),
        });
        return await response.json();
    }

}

export const api = new DataGenerator("https://task5-back.onrender.com")