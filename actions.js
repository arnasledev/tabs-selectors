var teamTabsTemplate = '<li id="tab-team-{n}" class="{class}">Team {n} settings</li>'
var teamsDisplayContent = $('.team-display-content')
var defaultTeamSettings = ''
var teamTabs = $('.teams-tabs')

$('.team-selector').on('change', function () {
    var value = $(this).val()

    defaultTeamSettings = teamsDisplayContent.find('#team-1').clone() // using zeptojs methods
    teamTabs.html('')
    teamsDisplayContent.html('').show()

    if (value > 0) {
        for (var i = 0; i < value; i++) {
            var template = teamTabsTemplate.replace(/{n}/g, i + 1)
            if (i < 1) {
                template = template.replace('{class}', 'active')
            } else {
                template = template.replace('{class}', '')
            }

            var thisTeamSettings = defaultTeamSettings[0].innerHTML
            // using zeptojs methods
            thisTeamSettings = $('<div >', { id: `team-${i + 1}`, html: thisTeamSettings })
            if (i > 0) {
                thisTeamSettings.hide()
            }

            teamsDisplayContent.append(thisTeamSettings)
            teamTabs.append(template)
        }

        teamTabs.show()
    }
})

$(document).on('click', '.teams-tabs li', function () {
    var activeTab = $(this).attr('id').replace('tab-', '')

    teamTabs.find('li').removeClass('active')
    $(this).addClass('active')

    teamsDisplayContent.find('div').hide()
    teamsDisplayContent.find(`div[id="${activeTab}"]`).show()
})