// Global — uses ARCHETYPES and classifyArchetype globals from archetypes.js

function renderResults(scores, container) {
  var key = classifyArchetype(scores);
  var a = ARCHETYPES[key];

  container.innerHTML = [
    '<div class="results-container animate-in">',

      '<div class="archetype-header">',
        '<span class="archetype-icon">' + a.icon + '</span>',
        '<span class="badge badge-gold" style="margin-bottom:var(--space-3)">Your Oracle Archetype</span>',
        '<h2 class="archetype-title">' + a.name + '</h2>',
        '<p class="archetype-tagline">' + a.tagline + '</p>',
      '</div>',

      '<div class="card card-glow" style="margin-bottom:var(--space-6)">',
        '<p class="archetype-description">' + a.description + '</p>',
        '<h4 style="margin-bottom:var(--space-4)">Key Patterns</h4>',
        '<div class="traits-grid">',
          a.traits.map(function(t) { return '<div class="trait-item">' + t + '</div>'; }).join(''),
        '</div>',
      '</div>',

      '<div class="card" style="margin-bottom:var(--space-6)">',
        '<h4 style="margin-bottom:var(--space-4)">Online Paths That Fit You</h4>',
        '<div style="display:flex;flex-wrap:wrap;gap:var(--space-2)">',
          a.paths.map(function(p) { return '<span class="badge badge-violet">' + p + '</span>'; }).join(''),
        '</div>',
      '</div>',

      '<div class="action-plan card">',
        '<h3 class="text-gold" style="margin-bottom:var(--space-5)">Your Action Plan</h3>',
        '<div class="action-steps">',
          a.actionPlan.map(function(step, i) {
            return [
              '<div class="action-step">',
                '<div class="step-number">' + (i + 1) + '</div>',
                '<div class="step-content">',
                  '<h4>' + step.title + '</h4>',
                  '<p>' + step.description + '</p>',
                '</div>',
              '</div>'
            ].join('');
          }).join(''),
        '</div>',

        '<div style="margin-top:var(--space-6);padding-top:var(--space-5);border-top:1px solid var(--color-border)">',
          '<div style="display:flex;gap:var(--space-4);flex-wrap:wrap">',
            '<div style="flex:1;min-width:200px">',
              '<p class="text-muted" style="font-size:var(--text-xs);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:var(--space-2)">First Move</p>',
              '<p style="color:var(--color-text);font-size:var(--text-sm)">' + a.firstMove + '</p>',
            '</div>',
            '<div style="flex:1;min-width:200px">',
              '<p class="text-muted" style="font-size:var(--text-xs);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:var(--space-2)">Watch Out For</p>',
              '<p style="color:var(--color-danger);font-size:var(--text-sm)">' + a.warningSign + '</p>',
            '</div>',
          '</div>',
        '</div>',
      '</div>',

      '<div class="results-footer" style="margin-top:var(--space-10)">',
        '<p class="text-muted" style="margin-bottom:var(--space-5)">',
          'Want to explore further? Retake the assessment or share your archetype.',
        '</p>',
        '<div style="display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">',
          '<button class="btn btn-primary" id="btn-retake">Retake the Oracle</button>',
          '<button class="btn btn-secondary" id="btn-share">Share My Archetype</button>',
        '</div>',
      '</div>',

    '</div>'
  ].join('');
}
