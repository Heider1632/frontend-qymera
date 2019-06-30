<template>
<div :class="{ 'nav-open': NavbarStore.showNavbar }">
 	<router-view name="header" />
  		<div class="wrapper">
    	<!--<notifications></notifications>-->

    	<side-bar>

      	<sidebar-link to="/teacher/1/">
        	<md-icon>home</md-icon>
        	<p>Inicio</p>
      	</sidebar-link>

      	<sidebar-link to="/teacher/1/groups">
        	<md-icon>person</md-icon>
        	<p>Grupos</p>
      	</sidebar-link>

      	<sidebar-link to="/teacher/1/list">
        	<md-icon>content_paste</md-icon>
        	<p>Lista</p>
      	</sidebar-link>

      	<sidebar-link to="/teacher/1/indicator">
        	<md-icon>assessment</md-icon>
        	<p>Indicadores</p>
      	</sidebar-link>

     	<sidebar-link to="/teacher/1/activity">
        	<md-icon>bubble_chart</md-icon>
        	<p>Actividad</p>
      	</sidebar-link>

      	<sidebar-link to="/teacher/1/note">
        	<md-icon>library_books</md-icon>
        	<p>Nota</p>
      	</sidebar-link>

      	<sidebar-link to="/teacher/1/consolide">
        	<md-icon>notifications</md-icon>
        	<p>Consolidados</p>
      	</sidebar-link>

    	</side-bar>

    	<div class="main-panel">
      		<div>
        		<router-view />
      		</div>
      		<router-view name="footer" />
    	</div>
  	</div>
</div>
</template>
