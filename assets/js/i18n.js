/* SMART Menu — i18n · v1.0 */
(function () {
  var _lang = localStorage.getItem('smLang') || 'en';
  window.I18N_LANG = _lang;

  var _dict = {
    es: {
      /* ── SIDEBAR ─────────────────── */
      'nav.cat.main': 'Principal',
      'nav.dashboard': 'Dashboard',
      'nav.menus': 'Menús',
      'nav.menuBasal': 'Menú Basal',
      'nav.cambios': 'Cambios y Excepciones',
      'nav.centros': 'Centros',
      'nav.publicacion': 'Publicación',
      'nav.config': 'Configuración',
      'nav.users': 'Usuarios',
      'sidebar.role': 'Nutricionista Central',
      'sidebar.settings': 'Ajustes de cuenta',
      'sidebar.logout': 'Cerrar sesión',
      /* ── MODALS COMUNES ──────────── */
      'modal.logout.title': 'Cerrar sesión',
      'modal.logout.body': '¿Estás seguro de que deseas cerrar la sesión actual?',
      'modal.logout.cancel': 'Cancelar',
      'modal.logout.btn': 'Cerrar sesión',
      'modal.settings.title': 'Ajustes de cuenta',
      'modal.settings.profile': 'Perfil',
      'modal.settings.name': 'Nombre',
      'modal.settings.lastname': 'Apellidos',
      'modal.settings.email': 'Email',
      'modal.settings.role': 'Rol',
      'modal.settings.security': 'Seguridad',
      'modal.settings.currentPass': 'Contraseña actual',
      'modal.settings.newPass': 'Nueva contraseña',
      'modal.settings.confirmPass': 'Confirmar contraseña',
      'modal.settings.prefs': 'Preferencias',
      'modal.settings.lang': 'Idioma',
      'modal.settings.notif': 'Notificaciones por email',
      'modal.settings.cancel': 'Cancelar',
      'modal.settings.save': 'Guardar cambios',
      'modal.settings.saved': 'Ajustes guardados correctamente',
      /* ── ESTADOS / TIPOS ─────────── */
      'status.aprobado': 'Aprobado',
      'status.pendiente': 'Pendiente',
      'status.borrador': 'Borrador',
      'status.publicado': 'Publicado',
      'status.revision': 'En revisión',
      'status.sincronizado': 'Sincronizado',
      'status.activo': 'Activo',
      'status.inactivo': 'Inactivo',
      'tipo.escolar': 'Escolar',
      'tipo.hospitalario': 'Hospitalario',
      'tipo.terceraEdad': '3ª Edad',
      'tipo.empresa': 'Empresa',
      'tipo.residencia': 'Residencia',
      /* ── ACCIONES ────────────────── */
      'action.view': 'Ver',
      'action.edit': 'Editar',
      'action.approve': 'Aprobar',
      'action.reject': 'Rechazar',
      'action.cancel': 'Cancelar',
      'action.save': 'Guardar',
      'action.close': 'Cerrar',
      'action.next': 'Siguiente',
      'action.previous': 'Anterior',
      'action.publish': 'Publicar',
      'action.resolve': 'Resolver',
      'action.export': 'Exportar',
      'action.filter': 'Filtrar',
      'action.search': 'Buscar',
      /* ── SEVERIDAD ───────────────── */
      'sev.critica': 'CRÍTICA',
      'sev.moderada': 'MODER.',
      'sev.baja': 'BAJA',
      /* ── COLUMNAS COMUNES ────────── */
      'col.centro': 'Centro',
      'col.tipo': 'Tipo',
      'col.comensales': 'Comensales/día',
      'col.estado': 'Estado menú',
      'col.costo': 'Costo vs Target',
      'col.nutri': 'Cumpl. Nutricional',
      'col.acciones': 'Acciones',
      'col.fecha': 'Fecha',
      'col.usuario': 'Usuario',
      'col.periodo': 'Período',
      /* ── LOGIN ───────────────────── */
      'login.subtitle': 'Sistema de gestión de menús con IA',
      'login.email': 'Correo electrónico',
      'login.password': 'Contraseña',
      'login.btn': 'Acceder al sistema',
      'login.forgot': '¿Olvidaste tu contraseña?',
      /* ── DASHBOARD ───────────────── */
      'dash.title': 'Dashboard Operativo',
      'dash.subtitle': 'Resumen General',
      'dash.tab.escolar': 'Escolar',
      'dash.tab.hospital': 'Hospital',
      'dash.tab.terceraEdad': 'Tercera Edad',
      'dash.tab.empresa': 'Empresa',
      'dash.banner.excep': 'Ver excepciones',
      'dash.banner.basal': 'Menú Basal',
      'dash.banner.pub': 'Publicación',
      'dash.banner.new': 'Nuevo menú',
      'dash.kpi.excep': 'Excepciones pendientes',
      'dash.kpi.costo': 'Menús dentro de target de costo',
      'dash.kpi.nutri': 'Cumplimiento nutricional global',
      'dash.kpi.centros': 'Centros con menú publicado',
      'dash.kpi.excep.resolve': 'Resolver ahora',
      'dash.chart.cumpl': 'Cumplimiento Mensual por Centro',
      'dash.centros.title': 'Estado de Centros',
      'dash.centros.viewAll': 'Ver todos',
      'dash.col.estadoMenu': 'Estado menú',
      'dash.act.title': 'Actividad Reciente',
      'dash.nutri.chart': 'Distribución Nutricional Global',
      'dash.period.week': 'Esta semana',
      'dash.period.14': 'Últimos 14 días',
      'dash.period.month': 'Último mes',
      'dash.filter.current': 'Semana actual',
      'dash.excel': 'Excel',
      /* ── CAMBIOS ─────────────────── */
      'cambios.title': 'Cambios y Excepciones',
      'cambios.subtitle': 'Control y Gestión de Cambios y Excepciones',
      'cambios.filter.tipo': 'Todos los tipos',
      'cambios.filter.motivo': 'Todos los motivos',
      'cambios.kpi.excep': 'Excepciones pendientes',
      'cambios.kpi.excep.trend': 'Requieren decisión tuya',
      'cambios.kpi.cambios': 'Cambios de centro pendientes',
      'cambios.kpi.cambios.trend': 'Propuestos por centros',
      'cambios.kpi.auto': 'Aprobados automáticamente',
      'cambios.kpi.auto.trend': 'Por la IA esta semana',
      'cambios.kpi.crit': 'Críticas sin resolver',
      'cambios.kpi.crit.trend': 'Bloquea publicación',
      'cambios.sec1': 'Excepciones pendientes — requieren tu aprobación',
      'cambios.sec1.desc': 'El centro ha solicitado una excepción al superar el target. La IA no puede aprobarlas automáticamente.',
      'cambios.sec2': 'Cambios propuestos por centros — dentro de target',
      'cambios.sec2.desc': 'La IA los ha validado automáticamente. Puedes revisarlos o dejarlos pasar.',
      'cambios.sec3': 'Aprobados automáticamente por la IA',
      'cambios.sec3.desc': 'Dentro de parámetros predefinidos — sin intervención humana necesaria.',
      'cambios.col.sev': 'Severidad',
      'cambios.col.motivo': 'Motivo',
      'cambios.col.plato': 'Plato',
      'cambios.col.detalle': 'Detalle',
      'cambios.col.original': 'Original',
      'cambios.col.propuesto': 'Propuesto',
      'cambios.col.ia': 'IA',
      'cambios.col.impacto': 'Impacto costo',
      'cambios.motivo.costo': 'Costo',
      'cambios.motivo.nutri': 'Nutricional',
      'cambios.motivo.sust': 'Sustitución',
      'cambios.motivo.ajuste': 'Ajuste',
      'cambios.motivo.dieta': 'Variante dieta',
      'cambios.modal.title': 'Detalle de excepción',
      'cambios.modal.tipoSev': 'Tipo / Severidad',
      'cambios.modal.desc': 'Descripción',
      'cambios.modal.obs': 'Observaciones de la nutricionista (opcional)',
      'cambios.modal.obsPh': 'Ej: aprobado por temporalidad, revisar siguiente semana…',
      'cambios.modal.viewMenu': 'Ver menú',
      /* ── PUBLICACIÓN ─────────────── */
      'pub.title': 'Publicación de Menús',
      'pub.subtitle': 'Publicación en Crownet',
      'pub.filter.tipo': 'Todos los tipos',
      'pub.filter.estado': 'Todos los estados',
      'pub.kpi.pending': 'Pendientes de publicar',
      'pub.kpi.published': 'Publicados esta semana',
      'pub.kpi.sync': 'Sinc. con Crownet',
      'pub.kpi.comensales': 'Comensales servidos',
      'pub.queue.title': 'Cola de Publicación — Pendientes',
      'pub.history.title': 'Historial de Publicaciones',
      'pub.col.menu': 'Menú / Período',
      'pub.col.estadoVal': 'Estado validación',
      'pub.col.fechaPub': 'Fecha publicación',
      'pub.col.crownet': 'Estado Crownet',
      'pub.btn.selected': 'Publicar seleccionados',
      'pub.btn.crownet': 'Estado Crownet',
      /* ── MENÚS ───────────────────── */
      'menus.title': 'Gestión de Menús',
      'menus.subtitle': 'Gestión de Menús',
      'menus.btn.new': 'Nuevo Menú',
      'menus.filter.desde': 'Desde',
      'menus.filter.hasta': 'Hasta',
      'menus.filter.tipo': 'Tipo centro',
      'menus.filter.estado': 'Estado',
      'menus.col.variantes': 'Variantes',
      'menus.wizard.s1': 'Centro y período',
      'menus.wizard.s2': 'Parámetros',
      'menus.wizard.s3': 'Adaptación IA',
      'menus.wizard.s4': 'Revisión',
      /* ── CENTROS ─────────────────── */
      'centros.title': 'Gestión de Centros',
      'centros.subtitle': 'Gestión de Centros',
      'centros.kpi.total': 'Total centros activos',
      'centros.kpi.published': 'Con menú publicado',
      'centros.kpi.pending': 'Pendientes de publicar',
      'centros.kpi.comensales': 'Comensales totales/día',
      'centros.list.title': 'Lista de centros',
      'centros.filter.tipo': 'Todos los tipos',
      'centros.search.ph': 'Buscar...',
      'centros.btn.sync': 'Sincronizar Crownet',
      'centros.col.ficha': 'Ficha',
      /* ── MENÚ BASAL ──────────────── */
      'basal.title': 'Menú Basal',
      'basal.tab.escolar': 'Escolar',
      'basal.tab.hospital': 'Hospital',
      'basal.tab.tercera': 'Tercera Edad',
      'basal.tab.empresa': 'Empresa',
      'basal.kpi.estado': 'Estado del menú basal',
      'basal.kpi.nutri': 'Cumplimiento nutricional',
      'basal.kpi.costo': 'Cumplimiento de costo',
      'basal.kpi.desv': 'Reglas con desviación',
      'basal.tab.menu': 'Menú',
      'basal.tab.nutri': 'Nutrición',
      'basal.tab.costo': 'Costo',
      'basal.tab.alerg': 'Alérgenos',
      'basal.tab.hist': 'Historial',
      'basal.btn.approve': 'Aprobar menú basal',
      'basal.btn.generate': 'Generar menú basal',
      'basal.col.plato': 'Plato',
      'basal.col.lun': 'Lunes',
      'basal.col.mar': 'Martes',
      'basal.col.mie': 'Miércoles',
      'basal.col.jue': 'Jueves',
      'basal.col.vie': 'Viernes',
      'basal.edit': 'Editar platos',
      'basal.regen': 'Regenerar IA',
      'basal.rules.title': 'Estado de reglas del motor IA',
      'basal.rules.config': 'Configurar reglas',
      'basal.hist.version': 'Versión',
      'basal.hist.fecha': 'Fecha',
      'basal.hist.gen': 'Generado por',
      'basal.hist.estado': 'Estado',
      'basal.hist.obs': 'Observaciones',
      /* ── CONFIGURACIÓN ───────────── */
      'config.title': 'Configuración del Sistema',
      'config.subtitle': 'Configuración del Sistema',
      'config.tab.global': 'Parámetros globales',
      'config.tab.reglas': 'Reglas de negocio',
      'config.tab.nutri': 'Nutrición',
      'config.tab.dietas': 'Dietas y alérgenos',
      'config.tab.crownet': 'Integración Crownet',
      'config.tab.marco': 'Marco regulatorio',
      /* ── USUARIOS ────────────────── */
      'users.title': 'Gestión de Usuarios',
      'users.subtitle': 'Gestión de Usuarios',
      'users.kpi.activos': 'Usuarios activos',
      'users.kpi.roles': 'Roles del sistema',
      'users.kpi.inactivos': 'Usuarios inactivos',
      'users.kpi.sesiones': 'Sesiones hoy',
      'users.col.usuario': 'Usuario',
      'users.col.email': 'Email',
      'users.col.rol': 'Rol',
      'users.col.centro': 'Centro asignado',
      'users.col.estado': 'Estado',
      'users.col.acceso': 'Último acceso',
      'users.btn.new': 'Crear nuevo usuario',
      'users.btn.roles': 'Ver roles y permisos',
    },
    en: {
      /* ── SIDEBAR ─────────────────── */
      'nav.cat.main': 'Main',
      'nav.dashboard': 'Dashboard',
      'nav.menus': 'Menus',
      'nav.menuBasal': 'Base Menu',
      'nav.cambios': 'Changes & Exceptions',
      'nav.centros': 'Centers',
      'nav.publicacion': 'Publication',
      'nav.config': 'Settings',
      'nav.users': 'Users',
      'sidebar.role': 'Central Nutritionist',
      'sidebar.settings': 'Account settings',
      'sidebar.logout': 'Log out',
      /* ── MODALS COMUNES ──────────── */
      'modal.logout.title': 'Log out',
      'modal.logout.body': 'Are you sure you want to log out?',
      'modal.logout.cancel': 'Cancel',
      'modal.logout.btn': 'Log out',
      'modal.settings.title': 'Account settings',
      'modal.settings.profile': 'Profile',
      'modal.settings.name': 'First name',
      'modal.settings.lastname': 'Last name',
      'modal.settings.email': 'Email',
      'modal.settings.role': 'Role',
      'modal.settings.security': 'Security',
      'modal.settings.currentPass': 'Current password',
      'modal.settings.newPass': 'New password',
      'modal.settings.confirmPass': 'Confirm password',
      'modal.settings.prefs': 'Preferences',
      'modal.settings.lang': 'Language',
      'modal.settings.notif': 'Email notifications',
      'modal.settings.cancel': 'Cancel',
      'modal.settings.save': 'Save changes',
      'modal.settings.saved': 'Settings saved successfully',
      /* ── ESTADOS / TIPOS ─────────── */
      'status.aprobado': 'Approved',
      'status.pendiente': 'Pending',
      'status.borrador': 'Draft',
      'status.publicado': 'Published',
      'status.revision': 'Under review',
      'status.sincronizado': 'Synced',
      'status.activo': 'Active',
      'status.inactivo': 'Inactive',
      'tipo.escolar': 'School',
      'tipo.hospitalario': 'Hospital',
      'tipo.terceraEdad': 'Senior Care',
      'tipo.empresa': 'Corporate',
      'tipo.residencia': 'Care Home',
      /* ── ACCIONES ────────────────── */
      'action.view': 'View',
      'action.edit': 'Edit',
      'action.approve': 'Approve',
      'action.reject': 'Reject',
      'action.cancel': 'Cancel',
      'action.save': 'Save',
      'action.close': 'Close',
      'action.next': 'Next',
      'action.previous': 'Previous',
      'action.publish': 'Publish',
      'action.resolve': 'Resolve',
      'action.export': 'Export',
      'action.filter': 'Search',
      'action.search': 'Search',
      /* ── SEVERIDAD ───────────────── */
      'sev.critica': 'CRITICAL',
      'sev.moderada': 'MODERATE',
      'sev.baja': 'LOW',
      /* ── COLUMNAS COMUNES ────────── */
      'col.centro': 'Center',
      'col.tipo': 'Type',
      'col.comensales': 'Diners/day',
      'col.estado': 'Menu status',
      'col.costo': 'Cost vs Target',
      'col.nutri': 'Nutr. compliance',
      'col.acciones': 'Actions',
      'col.fecha': 'Date',
      'col.usuario': 'User',
      'col.periodo': 'Period',
      /* ── LOGIN ───────────────────── */
      'login.subtitle': 'AI-powered menu management system',
      'login.email': 'Email address',
      'login.password': 'Password',
      'login.btn': 'Sign in',
      'login.forgot': 'Forgot your password?',
      /* ── DASHBOARD ───────────────── */
      'dash.title': 'Operations Dashboard',
      'dash.subtitle': 'General Summary',
      'dash.tab.escolar': 'School',
      'dash.tab.hospital': 'Hospital',
      'dash.tab.terceraEdad': 'Senior Care',
      'dash.tab.empresa': 'Corporate',
      'dash.banner.excep': 'View exceptions',
      'dash.banner.basal': 'Base Menu',
      'dash.banner.pub': 'Publication',
      'dash.banner.new': 'New menu',
      'dash.kpi.excep': 'Pending exceptions',
      'dash.kpi.costo': 'Menus within cost target',
      'dash.kpi.nutri': 'Global nutritional compliance',
      'dash.kpi.centros': 'Centers with published menu',
      'dash.kpi.excep.resolve': 'Resolve now',
      'dash.chart.cumpl': 'Monthly Compliance by Center',
      'dash.centros.title': 'Center Status',
      'dash.centros.viewAll': 'View all',
      'dash.col.estadoMenu': 'Menu status',
      'dash.act.title': 'Recent Activity',
      'dash.nutri.chart': 'Global Nutritional Distribution',
      'dash.period.week': 'This week',
      'dash.period.14': 'Last 14 days',
      'dash.period.month': 'Last month',
      'dash.filter.current': 'Current week',
      'dash.excel': 'Excel',
      /* ── CAMBIOS ─────────────────── */
      'cambios.title': 'Changes & Exceptions',
      'cambios.subtitle': 'Changes & Exceptions Management',
      'cambios.filter.tipo': 'All types',
      'cambios.filter.motivo': 'All reasons',
      'cambios.kpi.excep': 'Pending exceptions',
      'cambios.kpi.excep.trend': 'Require your decision',
      'cambios.kpi.cambios': 'Pending center changes',
      'cambios.kpi.cambios.trend': 'Proposed by centers',
      'cambios.kpi.auto': 'Auto-approved',
      'cambios.kpi.auto.trend': 'By AI this week',
      'cambios.kpi.crit': 'Critical unresolved',
      'cambios.kpi.crit.trend': 'Blocks publication',
      'cambios.sec1': 'Pending exceptions — require your approval',
      'cambios.sec1.desc': 'The center has requested an exception for exceeding the target. AI cannot auto-approve these.',
      'cambios.sec2': 'Changes proposed by centers — within target',
      'cambios.sec2.desc': 'AI has validated them automatically. You can review or let them pass.',
      'cambios.sec3': 'Auto-approved by AI',
      'cambios.sec3.desc': 'Within predefined parameters — no human intervention required.',
      'cambios.col.sev': 'Severity',
      'cambios.col.motivo': 'Reason',
      'cambios.col.plato': 'Dish',
      'cambios.col.detalle': 'Detail',
      'cambios.col.original': 'Original',
      'cambios.col.propuesto': 'Proposed',
      'cambios.col.ia': 'AI',
      'cambios.col.impacto': 'Cost impact',
      'cambios.motivo.costo': 'Cost',
      'cambios.motivo.nutri': 'Nutritional',
      'cambios.motivo.sust': 'Substitution',
      'cambios.motivo.ajuste': 'Adjustment',
      'cambios.motivo.dieta': 'Diet variant',
      'cambios.modal.title': 'Exception detail',
      'cambios.modal.tipoSev': 'Type / Severity',
      'cambios.modal.desc': 'Description',
      'cambios.modal.obs': 'Nutritionist notes (optional)',
      'cambios.modal.obsPh': 'E.g.: approved temporarily, review next week…',
      'cambios.modal.viewMenu': 'View menu',
      /* ── PUBLICACIÓN ─────────────── */
      'pub.title': 'Menu Publication',
      'pub.subtitle': 'Publication in Crownet',
      'pub.filter.tipo': 'All types',
      'pub.filter.estado': 'All statuses',
      'pub.kpi.pending': 'Pending publication',
      'pub.kpi.published': 'Published this week',
      'pub.kpi.sync': 'Synced with Crownet',
      'pub.kpi.comensales': 'Diners served',
      'pub.queue.title': 'Publication Queue — Pending',
      'pub.history.title': 'Publication History',
      'pub.col.menu': 'Menu / Period',
      'pub.col.estadoVal': 'Validation status',
      'pub.col.fechaPub': 'Publication date',
      'pub.col.crownet': 'Crownet status',
      'pub.btn.selected': 'Publish selected',
      'pub.btn.crownet': 'Crownet status',
      /* ── MENÚS ───────────────────── */
      'menus.title': 'Menu Management',
      'menus.subtitle': 'Menu Management',
      'menus.btn.new': 'New Menu',
      'menus.filter.desde': 'From',
      'menus.filter.hasta': 'To',
      'menus.filter.tipo': 'Center type',
      'menus.filter.estado': 'Status',
      'menus.col.variantes': 'Variants',
      'menus.wizard.s1': 'Center & period',
      'menus.wizard.s2': 'Parameters',
      'menus.wizard.s3': 'AI Adaptation',
      'menus.wizard.s4': 'Review',
      /* ── CENTROS ─────────────────── */
      'centros.title': 'Center Management',
      'centros.subtitle': 'Center Management',
      'centros.kpi.total': 'Total active centers',
      'centros.kpi.published': 'With published menu',
      'centros.kpi.pending': 'Pending publication',
      'centros.kpi.comensales': 'Total diners/day',
      'centros.list.title': 'Center list',
      'centros.filter.tipo': 'All types',
      'centros.search.ph': 'Search...',
      'centros.btn.sync': 'Sync Crownet',
      'centros.col.ficha': 'Profile',
      /* ── MENÚ BASAL ──────────────── */
      'basal.title': 'Base Menu',
      'basal.tab.escolar': 'School',
      'basal.tab.hospital': 'Hospital',
      'basal.tab.tercera': 'Senior Care',
      'basal.tab.empresa': 'Corporate',
      'basal.kpi.estado': 'Base menu status',
      'basal.kpi.nutri': 'Nutritional compliance',
      'basal.kpi.costo': 'Cost compliance',
      'basal.kpi.desv': 'Rules with deviation',
      'basal.tab.menu': 'Menu',
      'basal.tab.nutri': 'Nutrition',
      'basal.tab.costo': 'Cost',
      'basal.tab.alerg': 'Allergens',
      'basal.tab.hist': 'History',
      'basal.btn.approve': 'Approve base menu',
      'basal.btn.generate': 'Generate base menu',
      'basal.col.plato': 'Dish',
      'basal.col.lun': 'Mon',
      'basal.col.mar': 'Tue',
      'basal.col.mie': 'Wed',
      'basal.col.jue': 'Thu',
      'basal.col.vie': 'Fri',
      'basal.edit': 'Edit dishes',
      'basal.regen': 'Regenerate AI',
      'basal.rules.title': 'AI engine rules status',
      'basal.rules.config': 'Configure rules',
      'basal.hist.version': 'Version',
      'basal.hist.fecha': 'Date',
      'basal.hist.gen': 'Generated by',
      'basal.hist.estado': 'Status',
      'basal.hist.obs': 'Notes',
      /* ── CONFIGURACIÓN ───────────── */
      'config.title': 'System Settings',
      'config.subtitle': 'System Settings',
      'config.tab.global': 'Global parameters',
      'config.tab.reglas': 'Business rules',
      'config.tab.nutri': 'Nutrition',
      'config.tab.dietas': 'Diets & allergens',
      'config.tab.crownet': 'Crownet integration',
      'config.tab.marco': 'Regulatory framework',
      /* ── USUARIOS ────────────────── */
      'users.title': 'User Management',
      'users.subtitle': 'User Management',
      'users.kpi.activos': 'Active users',
      'users.kpi.roles': 'System roles',
      'users.kpi.inactivos': 'Inactive users',
      'users.kpi.sesiones': 'Sessions today',
      'users.col.usuario': 'User',
      'users.col.email': 'Email',
      'users.col.rol': 'Role',
      'users.col.centro': 'Assigned center',
      'users.col.estado': 'Status',
      'users.col.acceso': 'Last access',
      'users.btn.new': 'Create new user',
      'users.btn.roles': 'View roles & permissions',
    }
  };

  window.t = function (k) {
    return (_dict[_lang] || _dict.en)[k] || (_dict.en)[k] || k;
  };

  window.setLang = function (l) {
    localStorage.setItem('smLang', l);
    window.I18N_LANG = l;
    location.reload();
  };

  function _translateSidebar() {
    /* nav category */
    var cat = document.querySelector('.sidebar .nav-category');
    if (cat) cat.textContent = t('nav.cat.main');

    /* nav links by href */
    var _map = {
      'dashboard.html': 'nav.dashboard',
      'menus.html': 'nav.menus',
      'menu-basal.html': 'nav.menuBasal',
      'cambios.html': 'nav.cambios',
      'centros.html': 'nav.centros',
      'publicacion.html': 'nav.publicacion',
      'configuracion.html': 'nav.config',
      'usuarios.html': 'nav.users'
    };
    document.querySelectorAll('.sidebar .nav-link').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href && _map[href]) {
        var sp = a.querySelector('.menu-title');
        if (sp) sp.textContent = t(_map[href]);
      }
    });

    /* user role */
    var role = document.querySelector('.sm-user-role');
    if (role) role.textContent = t('sidebar.role');

    /* settings btn */
    var sBtn = document.querySelector('.sm-settings-btn');
    if (sBtn) {
      var si = sBtn.querySelector('i');
      sBtn.textContent = ' ' + t('sidebar.settings');
      if (si) sBtn.insertBefore(si, sBtn.firstChild);
    }

    /* logout btn */
    var lBtn = document.querySelector('.sm-logout-btn');
    if (lBtn) {
      var li = lBtn.querySelector('i');
      lBtn.textContent = ' ' + t('sidebar.logout');
      if (li) lBtn.insertBefore(li, lBtn.firstChild);
    }

    /* toggle active state */
    document.querySelectorAll('.sm-lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === _lang);
    });
  }

  function _translateDataAttrs() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      el.placeholder = t(el.getAttribute('data-i18n-ph'));
    });
  }

  window.applyI18n = function () {
    document.documentElement.lang = _lang;
    _translateSidebar();
    _translateDataAttrs();
  };

  /* helpers for JS-generated content */
  window.statusLabel = function (s) {
    var _m = {
      'Aprobado': t('status.aprobado'),
      'Pendiente': t('status.pendiente'),
      'Borrador': t('status.borrador'),
      'Publicado': t('status.publicado'),
      'En revisión': t('status.revision'),
      'Sincronizado': t('status.sincronizado'),
      'Activo': t('status.activo'),
      'Inactivo': t('status.inactivo')
    };
    return _m[s] || s;
  };
  window.tipoLabel = function (s) {
    var _m = {
      'Escolar': t('tipo.escolar'),
      'Hospitalario': t('tipo.hospitalario'),
      '3ª Edad': t('tipo.terceraEdad'),
      'Empresa': t('tipo.empresa'),
      'Residencia': t('tipo.residencia')
    };
    return _m[s] || s;
  };

  /* auto-apply on ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.applyI18n);
  } else {
    window.applyI18n();
  }
})();
