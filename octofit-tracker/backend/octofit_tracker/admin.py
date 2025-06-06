from django.contrib import admin
from .models import User, Team, Activity, Leaderboard, Workout

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('_id', 'username', 'email')
    search_fields = ('username', 'email')

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('_id', 'name')
    search_fields = ('name',)

@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ('_id', 'user', 'activity_type', 'duration')
    search_fields = ('activity_type',)

@admin.register(Leaderboard)
class LeaderboardAdmin(admin.ModelAdmin):
    list_display = ('_id', 'user', 'score')
    search_fields = ('user',)

@admin.register(Workout)
class WorkoutAdmin(admin.ModelAdmin):
    list_display = ('_id', 'name')
    search_fields = ('name',)
