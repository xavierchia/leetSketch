git:
	git add .
	git commit -m "$m"
	git push origin master
	git checkout gh-pages
	git rebase master
	git push -f origin gh-pages
	git checkout master
	
# In terminal, type this to run the sequence above:	
# make git m="your message"
