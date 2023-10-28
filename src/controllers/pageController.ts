import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.render('pages/pages');

}

export const dogs = (req: Request, res: Response) => {
    res.send('dogs')
    //res.render('pages/page');

}

export const cats = (req: Request, res: Response) => {
    res.send('Cats')
    //res.render('pages/page');

}

export const fishes = (req: Request, res: Response) => {
    res.send('Fishes')
    //res.render('pages/page');

}