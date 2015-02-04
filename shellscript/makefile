# -- GULPIFY ------------------------------------------------------------------------------------------
#
# Name       : Bootstrap for AngularJS
# Descrition : simple bootstrap for AngularJS
# Version    : 0.1.0
# Author     : Daniel Castro <dancasttro@gmail.com>
#
#
# -----------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------
# CONFIG
# -------------------------------------------------------------------------------------

# Main
DONE  = \033[32m✔\033[32m
ERROR = \033[31m✖\033[31m
INFO  = \033[36m→\033[36m
LINE  = -----------------------------------------

# Scaffolding
# SRC    = src/{js,styles,images,fonts,lib,partials}
# PUBLIC = public/{scripts,styles,images/icons,fonts}

# APP = src/js/app.js
# CONTROLLERS = src/js/controllers.js
# SERVICES = src/js/services.js
# DIRECTIVES = src/js/directives.js
# FILTERS = src/js/filters.js
# STYLE  = src/styles/styles.css
# VIEW   = src/index.html

# Global Tasks
global:
	@echo " $(INFO) Installing Dependencies... please wait."
	@sudo npm install -q
	@rm -rf makefile logo-gulpify.jpg README.md


# -------------------------------------------------------------------------------------
# NEW PROJECT
# -------------------------------------------------------------------------------------

new: init_new
	@echo ""
	@echo " $(CHECK) Done!"

init_new:
	@echo " $(INFO) Scaffolding"

	@bash -c "mkdir -p $(SRC)"

	@touch $(APP)
	@touch $(CONTROLLERS)
	@touch $(SERVICES)


# -------------------------------------------------------------------------------------
# EXISTING PROJECT
# -------------------------------------------------------------------------------------


# current: init_current global
# 	@echo ""
# 	@echo " $(CHECK) Done!"

# init_current:
# 	@echo " $(INFO) Scaffolding"

# 	@mv * .[^.]* ..

# 	@rm gulpify
