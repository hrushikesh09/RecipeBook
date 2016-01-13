Recipes = new Meteor.Collection('recipes');

RecipeSchema = new SimpleSchema({
   name:{
       type: String,
       label:"Name"
   },
    desc:{
        type: String,
        label:"Description"
    },
    author:{
        type: String,
        label:"author",
        autoValue: function(){
            return this.userId
        },
        autoform:{
            type: "hidden"
        }
    },
    createdAt:{
        type: Date,
        label: "Created At",
        autoValue: function(){
            return new Date()
        },
        autoform:{
            type: "hidden"
        }
    }

});

Recipes.attachSchema(RecipeSchema);