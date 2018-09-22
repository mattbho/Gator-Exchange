module.exports = (app)=> {

	app.get('/about', (req, res)=> {

		 res.render('about.ejs')
	})

	app.get('/about/:name', (req, res)=> {

		   let name = req.params.name;

		   let members = ["matt", "justin", "juan", "riza", "ghulam", "dian", "jason"]

		   if(members.includes(name)) res.render(name+".ejs")
	})
}