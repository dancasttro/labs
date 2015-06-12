styledown = ./node_modules/bin/styledown

index.html: \
	color.styl \
	buttons.styl \
	forms.css \
	lists.css \
	panels.css \
	tabs.css \
	progress.css \
	components.css \
	# _extras.css
	$(styledown) $^ > $@
