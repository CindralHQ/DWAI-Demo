            </td>
          </tr>
          <tr>
            <td class="footer">
              <?php if (!empty($support_email) || !empty($site_url)) : ?>
                <p>
                  Need help?
                  <?php if (!empty($support_email)) : ?>
                    Reach us at <a href="mailto:<?php echo e($support_email); ?>"><?php echo e($support_email); ?></a>
                  <?php endif; ?>
                  <?php if (!empty($site_url)) : ?>
                    <?php echo !empty($support_email) ? ' or visit ' : 'Visit '; ?><a href="<?php echo e($site_url); ?>"><?php echo e($site_url); ?></a>
                  <?php endif; ?>.
                </p>
              <?php endif; ?>
              <p class="muted">You are receiving this email because of activity on your account. If this was not you, contact support.</p>
              <p class="muted">&copy; <?php echo date('Y'); ?> <?php echo e($site_name); ?>. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
