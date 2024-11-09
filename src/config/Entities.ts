export interface Character {
    id:     number;
    name:   string;
    size:   string;
    age:    string;
    bounty: string;
    crew:   Crew;
    fruit:  Fruit;
    job:    string;
    status: string;
}

export interface Crew {
    id:          number;
    name:        string;
    description: null;
    status:      string;
    number:      string;
    roman_name:  string;
    total_prime: string;
    is_yonko:    boolean;
}

export interface Fruit {
    id:            number;
    name:          string;
    description:   string;
    type:          string;
    filename:      string;
    roman_name:    string;
    technicalFile: string;
}
