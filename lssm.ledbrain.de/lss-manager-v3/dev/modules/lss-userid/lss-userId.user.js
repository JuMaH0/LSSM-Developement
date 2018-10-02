(function () {

    var LSS_USERID_STORAGE = "LSS_USERID_STORAGE";

    I18n.translations.de.lssm.userId = {
        'name': 'User-ID',
        'putCredits': {
            'label': 'Credits verschieben',
            'description': 'Verschiebt die Creditszahl hinter den Usernamen in der Profil-Dropdown um Platz zu sparen (nur möglich, wenn keine Creditserweiterung aktiv)'
        }
    }

    var managedSettings = {
        "id": LSS_USERID_STORAGE,
        "title": I18n.t('lssm.userId.name'),
        "settings": {
            "putCreditsToProfile": {
                "default": 0,
                "ui": {
                    "label": I18n.t('lssm.userId.putCredits.label') + ":&nbsp;",
                    "type": "checkbox",
                    "description": I18n.t('lssm.userId.putCredits.description'),
                    "incompatibelWith": ['creditserweiterung']
                }
            }
        }
    };

    lssm.managedSettings.register(managedSettings);

    function getSetting(setting) {
      return lssm.managedSettings.getSetting(LSS_USERID_STORAGE, setting);
    }

    console.log('Credits ins Profil verschieben: ' + getSetting('putCreditsToProfile'));

    if (!lssm.modules.isActive('creditserweiterung')) {
        alert('Wird dir die Leiste oben langsam zu voll?\nProbier doch mal das Modul "Creditserweiterung" aus, dann hast du wieder mehr Platz oben ;)');
    }
    $('#navbar-main-collapse > ul').append('<li><a class="lightbox-open" href="' + $("#navbar_profile_link").attr("href") + '">' + user_id + '</a></li>');
})();
