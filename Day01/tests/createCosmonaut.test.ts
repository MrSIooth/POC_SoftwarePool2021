import { describe, it, expect } from '@jest/globals';
import { createCosmonaut } from '../src/createCosmonaut';
import { Mission, Country, Cosmonaut } from "../src/types";

describe('Test cosmonaut function', () => {
    it('first', () => {
        const temp = createCosmonaut('Bob', Mission.ISS, Country.FR);
        expect(temp.name).toBe('Bob');
        expect(temp.mission).toBe(Mission.ISS);
        expect(temp.country).toBe(Country.FR);
    });
    it('second', () => {
        const temp = createCosmonaut('skidaddle skidoodle your dick is now a noodle', Mission.ISS, Country.IND);
        expect(temp.name).toBe('skidaddle skidoodle your dick is now a noodle');
        expect(temp.mission).toBe(Mission.ISS);
        expect(temp.country).toBe(Country.IND);
    });
    it('second', () => {
        const temp = createCosmonaut('WAAAASSUUUUUUUPPPPPPP', Mission.MARS, Country.USA);
        expect(temp.name).toBe('WAAAASSUUUUUUUPPPPPPP');
        expect(temp.mission).toBe(Mission.MARS);
        expect(temp.country).toBe(Country.USA);
    });
});