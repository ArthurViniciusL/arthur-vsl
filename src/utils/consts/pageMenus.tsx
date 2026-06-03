import i18n from '@/locales/i18n';
import { IcAboutMe, IcProjects, IcDevSetup } from '@/utils/modules/icons';

export const PAGE_MENUS = [
    {
        href: '',
        label: i18n.t('app.header.btn.about'),
        icon: <IcAboutMe />
    },
    {
        href: '',
        label: i18n.t('app.header.btn.projects'),
        icon: <IcProjects />,
    },
    {
        href: '',
        label: i18n.t('app.header.btn.dev_setup'),
        icon: <IcDevSetup />,
    }
];
