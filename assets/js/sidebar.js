(function () {
  function initSidebar() {
    var user = document.querySelector('.sm-sidebar-user');
    if (!user) return;

    // Force inline styles so this works even when CSS is cached (old version)
    user.style.cssText = 'position:absolute!important;bottom:0!important;left:0!important;width:258px!important;z-index:101!important;padding:1rem 1.5rem;border-top:1px solid rgba(0,0,0,0.08);background:rgba(22,163,73,0.05);box-sizing:border-box;';

    // Also ensure the sidebar container supports absolute positioning
    var sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.style.position = 'fixed';
      sidebar.style.overflow = 'hidden';
    }

    var userInfo = user.querySelector('.d-flex');
    var infoHTML = userInfo ? userInfo.outerHTML : '';

    user.innerHTML =
      infoHTML +
      '<div style="display:flex;flex-direction:column;margin-top:0.75rem;border-top:1px solid rgba(0,0,0,0.07);padding-top:0.6rem;">' +
        '<a href="#" onclick="$(\'#modalAjustes\').modal(\'show\');return false;"' +
          ' onmouseover="this.style.color=\'#16A349\'"' +
          ' onmouseout="this.style.color=\'#6c757d\'"' +
          ' style="display:flex;align-items:center;gap:0.4rem;font-size:0.78rem;color:#6c757d;text-decoration:none;padding:0.3rem 0;transition:color .2s;">' +
          '<i class="mdi mdi-settings-outline" style="font-size:1rem;"></i> Ajustes de cuenta' +
        '</a>' +
        '<a href="#" onclick="$(\'#modalLogout\').modal(\'show\');return false;"' +
          ' onmouseover="this.style.color=\'#dc3545\'"' +
          ' onmouseout="this.style.color=\'#6c757d\'"' +
          ' style="display:flex;align-items:center;gap:0.4rem;font-size:0.78rem;color:#6c757d;text-decoration:none;margin-top:0.55rem;padding:0.3rem 0;transition:color .2s;">' +
          '<i class="mdi mdi-logout" style="font-size:1rem;"></i> Cerrar sesi&oacute;n' +
        '</a>' +
      '</div>';

    if (!document.getElementById('modalAjustes')) {
      var div = document.createElement('div');
      div.innerHTML =
        '<div class="modal fade" id="modalAjustes" tabindex="-1" role="dialog">' +
          '<div class="modal-dialog" role="document"><div class="modal-content">' +
            '<div class="modal-header">' +
              '<h5 class="modal-title" style="font-size:.95rem;font-weight:700">' +
                '<i class="mdi mdi-settings-outline mr-1" style="color:var(--sm-green)"></i>Ajustes de cuenta' +
              '</h5>' +
              '<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>' +
            '</div>' +
            '<div class="modal-body" style="font-size:.85rem">' +
              '<div class="mb-3">' +
                '<div style="color:var(--sm-green);font-weight:700;font-size:.8rem;margin-bottom:.65rem">Perfil</div>' +
                '<div class="row">' +
                  '<div class="col-6"><label class="form-label" style="font-size:.78rem;font-weight:600">Nombre</label><input type="text" class="form-control form-control-sm" value="Ana García"></div>' +
                  '<div class="col-6"><label class="form-label" style="font-size:.78rem;font-weight:600">Apellidos</label><input type="text" class="form-control form-control-sm" value=""></div>' +
                '</div>' +
                '<div class="mt-2"><label class="form-label" style="font-size:.78rem;font-weight:600">Email</label><input type="email" class="form-control form-control-sm" value="ana.garcia@vorare.com"></div>' +
                '<div class="mt-2"><label class="form-label" style="font-size:.78rem;font-weight:600">Rol</label><input type="text" class="form-control form-control-sm" value="Nutricionista Central" disabled></div>' +
              '</div>' +
              '<div class="mb-3">' +
                '<div style="color:var(--sm-green);font-weight:700;font-size:.8rem;margin-bottom:.65rem">Seguridad</div>' +
                '<div><label class="form-label" style="font-size:.78rem;font-weight:600">Contraseña actual</label><input type="password" class="form-control form-control-sm" placeholder="••••••••"></div>' +
                '<div class="mt-2"><label class="form-label" style="font-size:.78rem;font-weight:600">Nueva contraseña</label><input type="password" class="form-control form-control-sm" placeholder="••••••••"></div>' +
                '<div class="mt-2"><label class="form-label" style="font-size:.78rem;font-weight:600">Confirmar contraseña</label><input type="password" class="form-control form-control-sm" placeholder="••••••••"></div>' +
              '</div>' +
              '<div>' +
                '<div style="color:var(--sm-green);font-weight:700;font-size:.8rem;margin-bottom:.65rem">Preferencias</div>' +
                '<div><label class="form-label" style="font-size:.78rem;font-weight:600">Idioma</label><select class="form-control form-control-sm"><option selected>Español</option><option>English</option></select></div>' +
                '<div class="mt-2 d-flex align-items-center justify-content-between"><label class="form-label mb-0" style="font-size:.78rem;font-weight:600">Notificaciones por email</label><input type="checkbox" checked></div>' +
              '</div>' +
            '</div>' +
            '<div class="modal-footer" style="border-top:1px solid var(--sm-border)">' +
              '<button type="button" class="btn btn-outline-secondary btn-sm" data-dismiss="modal">Cancelar</button>' +
              '<button type="button" class="btn btn-primary btn-sm" onclick="smToast(\'Ajustes guardados correctamente\',\'success\');$(\'#modalAjustes\').modal(\'hide\')">' +
                '<i class="mdi mdi-content-save-outline"></i> Guardar cambios' +
              '</button>' +
            '</div>' +
          '</div></div>' +
        '</div>';
      document.body.appendChild(div.firstChild);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSidebar);
  } else {
    initSidebar();
  }
})();
