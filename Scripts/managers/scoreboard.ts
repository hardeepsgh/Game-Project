module managers{
    export class Scoreboard
    {
        private _lives:number;
        private _scores:number;
        private _highScore:number;

        //public instance variables
        public LiveLabel: objects.Label;
        public ScoreLabel:objects.Label;
        public HighScoreLabel:objects.Label;

        //public properties
        get Lives():number{
            return this._lives;            
        }

        set Lives(newLives:number)
        {
            this._lives=newLives;
            this.LiveLabel.text="Lives :"+this._lives;
        }
        get Score():number{
            return this._scores;            
        }

        set Score(newScore:number)
        {
            this._scores=newScore;
            this.ScoreLabel.text="Scores :"+this._scores;
        }
        get HighScore():number{
            return this._highScore;            
        }

        set HighScore(newHighScore:number)
        {
            this._highScore=newHighScore;
            this.HighScoreLabel.text="High Score :"+this._highScore;
        }

        //constructor
        constructor()
        {
            this._initialize();
        }

        private _initialize():void
        {
            this.LiveLabel=new objects.Label("Lives : 0","20px","Consolas","#FFFF00",10,10,false);
            this.ScoreLabel=new objects.Label("Score : 99999","20px","Consolas","#FFFF00",500,10,false);
            this.HighScoreLabel=new objects.Label("High Score : 99999","40px","Consolas","#FFFF00",320,240,false);

            this.Lives=5;
            this.Score=9999;

        } 

        
    }
}

