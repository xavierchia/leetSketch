git:
	git add .
	git commit -m "$m"
	git push origin master
	git checkout gh-pages
	git rebase master
	git push origin gh-pages
	git checkout master
	