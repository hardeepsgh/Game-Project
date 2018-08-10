

module managers {
    export class Collision {
        /**
         *
         *
         * @static
         * @param {objects.GameObject} object1
         * @param {objects.GameObject} object2
         * @memberof Collision
        /**
         *
         *
         * @static
         * @param {objects.GameObject} object1
         * @param {objects.GameObject} object2
         * @memberof Collision
         */
        public static Check(roadObject:objects.Road,object1: objects.GameObject, object2: objects.GameObject,currentScene: objects.Scene) {
            let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
            let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);


            if (math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {

                if (!object2.isColliding) {
                    console.log("collision" + object2.name);
                    object2.isColliding = true;

                    switch (object2.name) {
                        case "roadblock":
                            console.log("inside road block ");
                            if(objects.Game.levelSelected=="level1")
                            {
                                objects.Game.scoreboard.Score -= 10;
                            }
                            if(objects.Game.levelSelected=="level2")
                            {
                                objects.Game.scoreboard.Score -= 20;
                            }
                            if(objects.Game.levelSelected=="level3")
                            {
                                objects.Game.scoreboard.Score -= 30;
                            }
                            

                            objects.Game.scoreboard.Lives -= 1;
                            let explosion=new objects.Explosion(currentScene.assetManager);
                            explosion.x=object1.x-object1.halfWidth;
                            explosion.y=object1.y-object1.halfHeight;
                            currentScene.addChild(explosion);
                            object2._dy=(object2._dy*-1);                            
                            setTimeout(function(){
                                object2.alpha=0;
                            },100);  
                            
                            break;
                        case "barrel":
                            console.log("inside barel ");
                            //objects.Game.scoreboard.Score += 10;

                            if(objects.Game.levelSelected=="level1")
                            {
                                objects.Game.scoreboard.Score += 10;
                            }
                            if(objects.Game.levelSelected=="level2")
                            {
                                objects.Game.scoreboard.Score += 20;
                            }
                            if(objects.Game.levelSelected=="level3")
                            {
                                objects.Game.scoreboard.Score += 30;
                            }

                          //  objects.Game.scoreboard.Lives -= 1;
                            
                            let explosion1=new objects.Explosion(currentScene.assetManager);
                            explosion1.x=object1.x-object1.halfWidth;
                            explosion1.y=object1.y-object1.halfHeight;
                            //currentScene.addChild(explosion1);                            
                            //object2._dy=(object2._dy*-1);

                            //setTimeout(function(){
                                object2.alpha=0;
                            //},100);                            
                            

                            break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        }
    }
}



