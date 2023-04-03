class Recipe {
    title = "trứng rán"
    servings = "3"
    ingredients = ["6 quả trứng", "10l dầu ăn", "mắm tôm", "chảo"]
}
let recipe = new Recipe()
console.log("tên món ăn " + recipe.title)
console.log("khẩu phần ăn " + recipe.servings + " người")
console.log("thành phần ")
for (let i = 0; i < recipe.ingredients.length; i++) console.log("-" + recipe.ingredients[i])

